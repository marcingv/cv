import { Test, TestingModule } from '@nestjs/testing';
import { ExportController } from './export.controller';
import { PdfExportService } from '@gv-cv/nestjs-feature-export';
import { Response } from 'express';
import { BadRequestException } from '@nestjs/common';

jest.mock('@gv-cv/nestjs-feature-export');

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
    it('should throw error for invalid request body', async () => {
      let error: any;

      try {
        await controller.exportPdf({ url: '' }, {} as Response);
      } catch (err) {
        error = err;
      }

      expect(error).toBeTruthy();
      expect(error).toBeInstanceOf(BadRequestException);
    });

    it('should throw error when pdf export fails', async () => {
      let error: any;

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
