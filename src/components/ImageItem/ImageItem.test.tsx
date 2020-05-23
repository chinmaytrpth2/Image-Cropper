import React from 'react';
import { shallow } from 'enzyme';
import ImageItem from './ImageItem';

import {findByTestAtrr} from '../../utils/TestUtils';

const getImageData = () => {
    console.log("testing!");
}

const setUp = (props?: any) => {
    const component = shallow(<ImageItem {...props}/>);
    return component;
}

describe('#Image Component', () => {
    describe('With passed Props', () => {
        let wrapper: any;
        beforeEach(() => {
            const props = {
                src:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3Bdr7cMXHk1CU43C2ck6Hl&ust=1590219876980000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiukOr8xukCFQAAAAAdAAAAABAD",
                getImageData: getImageData,
                height: 20,
                width: 20
            }
            wrapper = setUp(props);
        })

        it('-Should render CANVAS Item without any Error', () => {
            const component = findByTestAtrr(wrapper, 'canvas');
            expect(component.length).toBe(1);
        })
    })

    describe('Without props', () => {
        let wrapper: any;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('-Should NOT render CANVAS Item ', () => {
            // const component = wrapper.find("[data-test='canvas']");
            const component = findByTestAtrr(wrapper, 'canvas');
            expect(component.length).toBe(0);
        })

    })
})