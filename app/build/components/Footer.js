import React, {Fragment, useState, useEffect} from 'react';

const Footer = () => {

    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 27 && modalOpen) {
                 setModalOpen(false);
             }
        });
    });

    return (
        <Fragment>
            <div>
                <span onClick={() => {setModalOpen(true)}}>Why am i doing this?</span>
            </div>
            <div className={`modal ${modalOpen ? 'show' : ''}`}>
               <span className="close" onClick={() => {setModalOpen(false)}}>
                   <i className="fal fa-times"></i>
               </span>
                <div>
                    <h1>Why am I doing this?</h1>
                    <p>This is a small, fun project to keep track of the neat things that I learn throughout my development journey. Keeping a historical record will help me see the progress I make, and help me remember the many things that I come across in the ever-changing web.</p>
                </div>
            </div>
            <div className={`modal-overlay ${modalOpen ? 'show' : ''}`} onClick={() => {setModalOpen(false)}}></div>
        </Fragment>
    );
};

export default Footer;