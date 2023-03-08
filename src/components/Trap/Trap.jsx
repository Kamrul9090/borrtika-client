import FocusTrap from 'focus-trap-react';
import React, { useEffect, useState } from 'react';
import TrapCard from './TrapCard';


const removeItemFromLocalStorage = (itemToRemove) => {
    console.log(itemToRemove.name);
    const items = JSON.parse(localStorage.getItem("cards"));
    const filterItems = items.filter(item => item.name !== itemToRemove.name);
    localStorage.setItem("cards", JSON.stringify(filterItems));
}


const focusTrapOptions = {
    checkCanFocusTrap: (trapContainers) => {
        const results = trapContainers.map((trapContainer) => {
            return new Promise((resolve) => {
                const interval = setInterval(() => {
                    if (getComputedStyle(trapContainer).visibility !== 'hidden') {
                        resolve();
                        clearInterval(interval);
                    }
                }, 5);
            });
        });
        // Return a promise that resolves when all the trap containers are able to receive focus
        return Promise.all(results);
    },
    // Called after focus is sent to the focus trap
    onPostActivate: () => {
        // eslint-disable-next-line no-console
        console.log('Focus has been sent to the animated focus trap');

    },
};

const Trap = ({ children }) => {
    const [isTrapActive, setIsTrapActive] = useState(false);
    const [myCard, setMyCards] = useState([])


    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
        setMyCards(storedCards)
    }, [])

    const handleRemoveItem = (removeItem) => {
        removeItemFromLocalStorage(removeItem);
        setMyCards(prevArray => prevArray.filter(item => item.name !== removeItem.name));
    }
    return (
        <div>
            <>
                <style>{`
      .animated-dialog {
        position: absolute;
        right: 50px;
        top:85px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s, visibility 0.5s;
      }
      .animated-dialog.is-active {
        opacity: 1;
        visibility: visible;
      }
      `}</style>
                <div>
                    <p>
                        <button
                            onClick={() => setIsTrapActive(true)}
                            aria-describedby="animated-dialog-heading"
                        >
                            {children}
                        </button>
                    </p>
                </div>
                <FocusTrap active={isTrapActive} focusTrapOptions={focusTrapOptions}>
                    <div
                        className={[
                            'z-40',
                            'trap',
                            'animated-dialog',
                            isTrapActive ? 'is-active' : '',
                        ].join(' ')}
                    >
                        <div className="flex flex-col max-w-lg space-y-1 sm:p-10 dark:bg-gray-900 dark:text-gray-100 bg-gray-100 max-h-72 overflow-y-auto">
                            <div className='flex justify-between items-center px-4 py-1'>
                                <h2 className="text-xl font-semibold">Your cart</h2>
                                <button
                                    type="button" className="px-6 py-2 border rounded-md dark:border-violet-400"
                                    onClick={() => setIsTrapActive(false)}
                                    aria-describedby="animated-dialog-heading"
                                >
                                    Back to Shop
                                </button>
                            </div>
                            <div>
                                {
                                    myCard.length > 0 ?
                                        myCard.map(card => <TrapCard key={card._id} card={card} handleRemoveItem={handleRemoveItem} setIsTrapActive={setIsTrapActive}></TrapCard>)
                                        :
                                        <p className='my-10'>Your cart is empty. Please add some books.</p>
                                }
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button" className="px-6 py-2 border rounded-md dark:border-violet-400"
                                    onClick={() => setIsTrapActive(false)}
                                    aria-describedby="animated-dialog-heading"
                                >
                                    Back to Shop
                                </button>
                                <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </FocusTrap>
            </>
        </div >
    );
};

export default Trap;