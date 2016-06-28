class MockModel {
    constructor() {}

    static find(cb) { cb() }
    static findOne(condition, cb) { condition &&  cb() }
    static findOneAndUpdate(condition, data, {}, cb) { condition && data && cb() }
    static findOneAndRemove(condition, cb) { condition && cb() }
    save(cb) { cb() }
}

MockModel.modelName = 'Test';

module.exports = MockModel;
