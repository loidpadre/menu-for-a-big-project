export default function Menu({list, setList}){
    return(
        <div className="menu">
            {
                list.map((menuitem) => {
                    const {img, title, id, price, category, desc} = menuitem;
                    return(
                        <div key={id} className="card-menu" >
                            <img src={img} alt={title} />
                            <header>
                                <h2>{title}</h2>
                                <p>${price}</p>
                            </header>
                            <p>{desc}</p>
                        </div>
                    )
                }
                    
                )
            }
        </div>
    )
}