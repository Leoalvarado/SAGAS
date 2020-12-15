import paxios from 'axios'

class uploadImg{
    sendImages (sku,name,categoria,precio,file){
        const form =  new FormData()
        form.append('sku', sku)
        form.append('name',name)
        form.append('categoria',categoria)
        form.append('precio', precio)
        form.append('file', file, 'form-data')

        return paxios.post('/api/productos/nuevoProducto', form)
    } 
}
 
export default  new uploadImg();