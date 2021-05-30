function MenuLink({id = 0, name = "", handleClick}) {
    let href = id !== 0 ? `/course/${id}` : '/courses', 
        text = name !== "" ? `${name}` : 'Все курсы';

    return <a 
        href="/"
        onClick={(e) => handleClick(href, e)}
    >
        {text}
    </a>
}

export default MenuLink;