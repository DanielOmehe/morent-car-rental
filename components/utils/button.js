const Button =({ color, width, height, children, shadow })=>(
    <>
        <button className='button'>{children}</button>
        <style jsx>{`
            .button{
                width: ${width ? width : '7.25rem'};
                height: ${height ? height : '2.75rem'};
                padding: ${width ? 0 : '0rem 1.25rem'};
                gap: 0.5rem;
                flex-shrink: 0;
                font-weight: 600;
                background: ${color ? color : '#eee'};
                border-radius: .5rem;
                border: none;
                cursor: pointer;
                color: ${color ? '#fff' : '#000'};
                position: relative;
                z-index: 1;
                display: grid;
                place-items: center;
                box-shadow: 0 0 1rem ${shadow};
            }
        `}</style>
    </>
)

export default Button