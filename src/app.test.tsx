import React from 'react';
import { shallow } from 'enzyme';
import App2 from './App2';

import {findByTestAtrr} from './utils/TestUtils/index';

const setUp = () => {
    const component = shallow(<App2 />);
    return component;
}

describe('#Main App Component', () => {
        let wrapper: any;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('-Should render the APP without any Error', () => {
            const component = findByTestAtrr(wrapper, 'App');
            const inputFile = findByTestAtrr(wrapper, "input-file");
            expect(component.length).toBe(1);
            expect(inputFile.length).toBe(1);
        })
})

