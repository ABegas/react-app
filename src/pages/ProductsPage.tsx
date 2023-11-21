import React, {useContext} from 'react'
import { Product } from '../components/Product';
import { UseProducts } from '../hooks/products';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { IProduct } from '../models';
import { OpenModalButton } from '../components/OpenModalButton';
import { ModalContext } from '../context/ModalContext';

export function ProductsPage() {
    const {loading, error, products, addProduct} = UseProducts();
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        open();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="container max-w-2xl mt-10 ml-10">
            { loading && <Loader /> }
            { error &&  <ErrorMessage error={error}/> }
            <div className="flex flex-wrap gap-2">
                { products.map(product => <Product product={product} key={product.id} />) }
            </div>
            

            { modal && <Modal title="Create New Product" onClose={close}>
                <CreateProduct onCreate={createHandler}/>
            </Modal> }
            
            <OpenModalButton onClick={openModal} buttonTitle={"Add new Product"} />
        </div>
    )
}