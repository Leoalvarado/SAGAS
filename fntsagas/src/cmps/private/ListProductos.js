import { useStateContext } from '../../utlts/Context';
import { AddButton } from '../cmns/Buttons';
import { useHistory } from 'react-router-dom';
import Page from '../cmns/Page';
import {paxios} from '../../utlts/Axios';
import './ListProductos.css';
import { useRef } from 'react';
import {  PRODUCT_ERROR, PRODUCT_LOADED, PRODUCT_RESET } from '../../utlts/store/reducers/prods.reducer';
import InfiniteScroll from 'react-infinite-scroller';
import { IoIosSync } from 'react-icons/io';
import Field from '../cmns/Field';

const ListProductos = ()=>{
  const [{prods}, dispatch] = useStateContext();
  const history = useHistory()
  const listElements = prods.products.map((o)=>{
    return (<div key={o._id}>{o.sku} {o.name} <span>{o.price}</span></div>);
  })
  const searchChange = (e)=>{
    //setSearchString(e.target.value);
    dispatch({ type: PRODUCT_RESET, payload: { searchFilter: e.target.value} });
  }
  const loadMore = function (page) {
    if (!prods.fetching) {
        paxios.get(
          (!(/^\s*$/).test(prods.searchFilter))?
            `/api/productos/productosAll${prods.currentPage}/${prods.pageLimit}/${encodeURI(prods.searchFilter)}`
            : `/api/productos/productosAll${prods.currentPage}/${prods.pageLimit}`)
          .then(({data})=>{
            dispatch({
              type: PRODUCT_LOADED,
              payload: {
                products:data.rslt,
                total:data.total,
                currentPage:(prods.currentPage+1)
              }
            });
          })
          .catch((ex)=>{
            dispatch({ type: PRODUCT_ERROR });
            console.log(ex)
        }); //end paxios
      }
      <h1>Hola</h1>
    };
  const scrollParentRef = useRef();
  return (
    <Page headding="Productos" footer={true}>
      <section className="productoList" ref={scrollParentRef}>
        <div className="SearchField">
          <Field
          id="seachString"
          type="text"
          caption="Buscar:"
          value={prods.searchFilter}
          onChange={searchChange}></Field>
        </div>
        <InfiniteScroll
          pageStart={prods.currentPage}
          hasMore={prods.hasMore}
          getScrollParent={()=>scrollParentRef.current}
          loader={(<div key="loadingli" className="loader"><IoIosSync /></div>)}
          loadMore={loadMore}
          element="section"
        >
          {listElements}
        </InfiniteScroll>
      </section>        
        
    </Page>
  );
}

export default ListProductos;
