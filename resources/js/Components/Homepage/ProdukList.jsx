


const ProdukList = ({ produks }) => {

    return produks.map((produk, i) => {
        return (
            <div div key={i} className="card w-96 bg-base-100 shadow-xl" >
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {produk.nama_produk}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{produk.keterangan}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline"><i class="fa-regular fa-tag"></i> {produk.harga}</div>
                        <div className="badge badge-outline">{produk.jumlah}</div>
                    </div>
                </div>
            </div >
        )
    })
}

export default ProdukList;
