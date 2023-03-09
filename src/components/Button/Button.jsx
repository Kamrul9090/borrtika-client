

export const Button = ({ children }) => {
    return (
        <div>
            <button type='submit' className='bg-green-900 hover:bg-green-600 text-white px-2 lg:px-4 py-2 rounded-lg'>{children}</button>
        </div>
    )
}

export const Buttonlg = ({ children }) => {
    return (
        <div>
            <button type='submit' className='bg-green-900 hover:bg-green-600 text-white w-full py-2 my-2 rounded-lg'>{children}</button>
        </div>
    )
}




