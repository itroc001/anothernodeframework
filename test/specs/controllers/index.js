const BaseController = require('../../../app/controllers');
const http_mocks = require('node-mocks-http');
const MockModel = require('../models/mock');

describe('BaseController', () => {
    let controller = new BaseController(MockModel);;
    let done;
    let doneWithErr;
    let doneWithData;
    let res;

    beforeEach(() => {
        res = http_mocks.createResponse();

        // done events to spy for
        done = sinon.spy();
        doneWithErr = () => done(true, false);
        doneWithData = () => done(false, true);
    });


    describe('#index', () => {

        beforeEach(() => {
            sinon.spy(controller.model, 'find');
        });

        afterEach(() => {
            expect(controller._activeAction).to.be.equal('index');
            expect(controller.model.find).to.have.been.calledOnce;

            controller.model.find.restore(); // remove spy
        });

        it('if err', () => {
            controller.index(doneWithErr);
            expect(done).to.have.been.calledWith(true, false);
        });

        it('if data', () => {
            controller.index(doneWithData);
            expect(done).to.have.been.calledWith(false, true);
        });

    });


    describe('#create', () => {

        afterEach(() => {
            expect(controller._activeAction).to.be.equal('create');
        });

        it('if err', () => {
            controller.create({}, doneWithErr);
            expect(done).to.have.been.calledWith(true, false);
        });

        it('if data', () => {
            controller.create({}, doneWithData);
            expect(done).to.have.been.calledWith(false, true);
        });

    });

    describe('#show', () => {

        beforeEach(() => {
            sinon.spy(controller.model, 'findOne');
        });

        afterEach(() => {
            expect(controller._activeAction).to.be.equal('show');
            expect(controller.model.findOne).to.have.been.calledOnce;

            controller.model.findOne.restore(); // remove spy
        });

        it('if err', () => {
            controller.show({}, doneWithErr);
            expect(done).to.have.been.calledWith(true, false);
        });

        it('if data', () => {
            controller.show({}, doneWithData);
            expect(done).to.have.been.calledWith(false, true);
        });

    });

    describe('#update', () => {

        beforeEach(() => {
            sinon.spy(controller.model, 'findOneAndUpdate');
        });

        afterEach(() => {
            expect(controller._activeAction).to.be.equal('update');
            expect(controller.model.findOneAndUpdate).to.have.been.calledOnce;

            controller.model.findOneAndUpdate.restore(); // remove spy
        });

        it('if err', () => {
            controller.update({}, {}, doneWithErr);
            expect(done).to.have.been.calledWith(true, false);
        });

        it('if data', () => {
            controller.update({}, {}, doneWithData);
            expect(done).to.have.been.calledWith(false, true);
        });

    });

    describe('#delete', () => {

        beforeEach(() => {
            sinon.spy(controller.model, 'findOneAndRemove');
        });

        afterEach(() => {
            expect(controller._activeAction).to.be.equal('delete');
            expect(controller.model.findOneAndRemove).to.have.been.calledOnce;

            controller.model.findOneAndRemove.restore(); //remove spy
        });

        it('if err', () => {
            controller.delete({}, doneWithErr);
            expect(done).to.have.been.calledWith(true, false);
        });

        it('if data', () => {
            controller.delete({}, doneWithData);
            expect(done).to.have.been.calledWith(false, true);
        });

    });

    describe('#_renderView', () => {

        before(() => {
            controller._activeAction = 'test';
        })

        it('if error', () => {
            controller._renderView(res, true, null);

            expect(res._getStatusCode()).to.be.equal(400);
            expect(res._getRenderView()).to.be.equal('tests/error');
            expect(res._getRenderData()).to.have.property('data');
        });

        it('if data', () => {
            controller._renderView(res, null, true);

            expect(res._getStatusCode()).to.be.equal(200);
            expect(res._getRenderView()).to.be.equal('tests/test');
            expect(res._getRenderData()).to.have.property('data');
        });

        it('else (not found)', () => {
            controller._renderView(res, null, null);

            expect(res._getStatusCode()).to.be.equal(404);
            expect(res._getRenderView()).to.be.equal('404');
        });
    });

    describe('#_renderViewAsJSON', () => {

        before(() => {
            controller._activeAction = 'test';
        })

        it('returns jSON view', () => {
            controller._renderView = sinon.spy();

            controller._renderViewAsJSON(res, null, null);

            expect(res._isJSON()).to.be.equal(true);
            expect(controller._renderView).to.have.been.calledWith(res, null, null);
        });
    });


});
