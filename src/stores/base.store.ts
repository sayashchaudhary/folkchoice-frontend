import { BaseModel, EntityIdentifier } from '../models/base.model';
import { action, observable, computed } from 'mobx';
import * as _ from 'lodash';

export abstract class BaseStore<T extends BaseModel> {

    //TODO: Remove string and use either string or number as entity identifier
    @observable entities: { [id: string]: T } = {};

    @action
    public pushEntity(entity: T) {
        if (!this.entities[entity.id]) {
            this.entities = {
                ...this.entities,
                [entity.id]: entity
            };
        }
    }

    @action
    public addAllEntities(entities: T[]) {
        entities.forEach(this.pushEntity.bind(this));
    }

    @action
    public deleteEntity(id: EntityIdentifier) {
        if (!id) {
            return;
        }

        if (this.entities[id]) {
            _.omit(this.entities, id);
        }
    }

    @action
    public updateEntity(id: EntityIdentifier, entity: T) {
        if (!this.entities[id]) {
            this.pushEntity(entity);
        } else {
            _.update(this.entities, id, () => entity);
        }
    }

    @computed get getIds(): EntityIdentifier[] {
        return _.keys(this.entities);
    }

    @computed get getEntities(): T[] {
        return _.values(this.entities);
    }
}

export default BaseStore;