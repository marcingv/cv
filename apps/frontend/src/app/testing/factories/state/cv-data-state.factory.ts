import { Dictionary } from '@ngrx/entity';
import { CvDataEntity } from '../../../data-access/state/cv-data/models';
import { fromCvData } from '../../../data-access/state/cv-data/reducers';
import { LANG_PL_CODE, LangCode } from '../../../core/translations';
import { CvDataFactory } from '@gv-cv/data-models';

export class CvDataStateFactory {
  public static createInstance(
    params?: Partial<fromCvData.State>,
  ): fromCvData.State {
    const data: CvDataEntity[] = [CvDataStateFactory.createEntity()];
    const state: fromCvData.State = {
      ids: CvDataStateFactory.mapToIds(data),
      entities: CvDataStateFactory.createDictionary(data),
      isLoading: false,
    };

    return {
      ...state,
      ...(params ?? {}),
    };
  }

  public static createEntity(params?: Partial<CvDataEntity>): CvDataEntity {
    const entity: CvDataEntity = {
      language: LANG_PL_CODE,
      data: CvDataFactory.createInstance(),
    };

    return {
      ...entity,
      ...(params ?? {}),
    };
  }

  public static createDictionary(
    entities: CvDataEntity[],
  ): Dictionary<CvDataEntity> {
    const dict: Dictionary<CvDataEntity> = {};

    entities.forEach(
      (oneEntity: CvDataEntity) => (dict[oneEntity.language] = oneEntity),
    );

    return dict;
  }

  public static mapToIds(entities: CvDataEntity[]): LangCode[] {
    return entities.map((oneEntity: CvDataEntity) => oneEntity.language);
  }
}
