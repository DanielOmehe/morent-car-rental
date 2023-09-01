const Button =({ color, children })=>(
    <>
        <button className='button'>{children}</button>
        <style jsx>{`
            .button{
                padding: 1rem;
                width: 7.25rem;
                height: 2.75rem;
                padding: 0rem 1.25rem;
                gap: 0.5rem;
                flex-shrink: 0;
                font-weight: 600;
                background: ${color ? color : '#eee'};
                border-radius: .5rem;
                border: none;
                cursor: pointer;
                color: ${color ? '#fff' : '#000'};
            }

            button:hover{
                box-shadow: 0 0 .2rem rgba(0, 0, 0, .34);                
            }

        `}</style>
    </>
)

export default Button