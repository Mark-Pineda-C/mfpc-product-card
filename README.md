# MFPC-Product-Card

Este es un paquete de pruebas de despliegue en NPM


```es6
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'mfpc-product-card'
```

```javascript
    <ProductCard 
        product={ product }
        initialValues={{
            count: 4,
            maxCount: 10
        }}
    >
        {
            () => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
    </ProductCard>
```
