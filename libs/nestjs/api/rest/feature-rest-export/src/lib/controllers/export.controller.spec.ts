import { Test, TestingModule } from '@nestjs/testing';
import { ExportController } from './export.controller';
import { PdfExportService } from '@gv-cv/nestjs-feature-export';
import { Response } from 'express';
import { BadRequestException, INestApplication } from '@nestjs/common';
import * as request from 'supertest';

jest.mock('@gv-cv/nestjs-feature-export');

describe('ExportController - functional', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExportController],
      providers: [PdfExportService],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('app should be created', () => {
    expect(app).toBeTruthy();
  });

  describe('POST /export/pdf', () => {
    it('should return 400 on empty payload', () => {
      return request(app.getHttpServer()).post('/export/pdf').expect(400);
    });

    it('should return 400 for invalid payload', () => {
      return request(app.getHttpServer())
        .post('/export/pdf')
        .send({
          url: '',
        })
        .expect(400);
    });
  });

  afterAll(async () => {
    app.close();
  });
});

describe('ExportController', () => {
  let controller: ExportController;
  let pdfService: PdfExportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExportController],
      providers: [PdfExportService],
    }).compile();

    pdfService = module.get(PdfExportService);
    controller = module.get<ExportController>(ExportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Export PDF', () => {
    it('should throw error when pdf export fails', async () => {
      let error: unknown;

      const exportUrlSpy = jest.spyOn(pdfService, 'exportUrl');
      exportUrlSpy.mockImplementation(() => {
        throw new Error('Pdf Renderer Error');
      });

      try {
        await controller.exportPdf(
          { url: 'http://some-page.com' },
          {} as Response,
        );
      } catch (err) {
        error = err;
      }

      expect(exportUrlSpy).toHaveBeenCalled();
      expect(error).toBeTruthy();
      expect(error).toBeInstanceOf(BadRequestException);
    });
  });
});
