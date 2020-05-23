import React from 'react';
import { shallow } from 'enzyme';
import ImageOptions from "./ImageOptions";

import {findByTestAtrr} from '../../utils/TestUtils';

const getImageData = () => {
    console.log("testing!");
}

const setUp = (props?: any) => {
    const component = shallow(<ImageOptions {...props}/>);
    return component;
}

describe('#Image Options Component', () => {
    describe('With passed Props', () => {
        let wrapper: any;
        beforeEach(() => {
            const props = {
                src:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3Bdr7cMXHk1CU43C2ck6Hl&ust=1590219876980000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiukOr8xukCFQAAAAAdAAAAABAD",
                getImageData: getImageData,
            }
            wrapper = setUp(props);
        })

        // it('-Should render CANVAS Item without any Error', () => {
        //     const component = findByTestAtrr(wrapper, 'canvas');
        //     expect(component.length).toBe(1);
        // })

         it('-Should render h3 and h4 Tags', () => {
            const component = findByTestAtrr(wrapper, 'h3');
            const component2 = findByTestAtrr(wrapper, "h4");
            expect(component.length).toBe(1);
            expect(component2.length).toBe(1);
        })
    })

    describe('Without props', () => {
        let wrapper: any;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('-Should NOT render the Grid ', () => {
            const component = findByTestAtrr(wrapper, 'imageGrid');
            expect(component.length).toBe(0);
        })

    })
})