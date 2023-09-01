const Button =({ color, width, height, children })=>(
    <>
        <button className='button'>{children}</button>
        <style jsx>{`
            .button{
                width: ${width ? width : '7.25rem'};
                height: ${height ? height : '2.75rem'};
                padding: 0rem 1.25rem;
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
            }

            button:hover{
                box-shadow: 0 0 .2rem rgba(0, 0, 0, .34);                
            }

        `}</style>
    </>
)

export default Button