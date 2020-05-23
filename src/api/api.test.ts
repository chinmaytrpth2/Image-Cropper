import imageUpload from './imageUpload';

jest.mock('./__mocks__/imageUpload');


describe('Testing the Fetch "POST" function', () => {
    let URL = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"


    it('Should return a POST response', () => {
        imageUpload(URL).then(res => {
            expect(res).toBeTruthy();
    })
})

    it('Should return a Image Address in response', () => {
        imageUpload(URL).then(res => {
            expect(res.url).toBeTruthy();
    })
})

})

