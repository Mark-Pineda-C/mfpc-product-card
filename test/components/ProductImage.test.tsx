import React from "react";
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from "../../src/components";
import { product2 } from "../data/products";



describe('ProductImage', () => {
    test('debe mostrar la imagen desde componente padre', () => { 
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        )
        expect( wrapper.toJSON() ).toMatchSnapshot();
    });
    test('debe mostrar la imagen ingresada por usuario', () => { 
        const wrapper = renderer.create(
            <ProductImage img={ product2.img }/>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });
})