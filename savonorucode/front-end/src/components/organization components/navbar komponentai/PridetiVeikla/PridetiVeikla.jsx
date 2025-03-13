import React, { useState } from 'react';
import './PridetiVeikla.css';
import Fox from '../../../../assets/Fox.png';
import Music from '../../../../assets/Music.png';
import Basketball from '../../../../assets/Basketball.png';
import KawaiNoodle from '../../../../assets/Kawaii Noodle.png';
import People from '../../../../assets/People.png';
import Nature from '../../../../assets/Nature.png';
import { useNavigate } from 'react-router-dom';

function PridetiVeikla() {
    const [checkedItems, setCheckedItems] = useState('');
    const navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [name]: checked,
        }));
    };

    function toleu(){
        navigate('/prideti-veikla/2');
    }

    return (
        <div className="activityContainer">
            <h1 className="activityHeader">Sfera</h1>
            <form className="activityForm">
                <input
                    type="checkbox"
                    name="Gyvūnai"
                    className="activityCheckbox"
                    id="gyvunai"
                    checked={checkedItems['Gyvūnai'] || false}
                    onChange={handleCheckboxChange}
                />
                <label
                    htmlFor="gyvunai"
                    className={`activityTextContainer ${checkedItems['Gyvūnai'] ? 'checked' : ''}`}
                >
                    <img src={Fox} alt="Fox" className="activityIcon" />
                    <p className="activityText">Gyvūnai</p>
                    <img src={Fox} alt="Fox" className="activityIcon" />
                </label>
            </form>
            <form className="activityForm">
                <input
                    type="checkbox"
                    name="Muzika"
                    className="activityCheckbox"
                    id="muzika"
                    checked={checkedItems['Muzika'] || false}
                    onChange={handleCheckboxChange}
                />
                <label
                    htmlFor="muzika"
                    className={`activityTextContainer ${checkedItems['Muzika'] ? 'checked' : ''}`}
                >
                    <img src={Music} alt="Music" className="activityIcon" />
                    <p className="activityText">Muzika</p>
                    <img src={Music} alt="Music" className="activityIcon" />
                </label>
            </form>
            <form className="activityForm">
                <input
                    type="checkbox"
                    name="Sportas"
                    className="activityCheckbox"
                    id="sportas"
                    checked={checkedItems['Sportas'] || false}
                    onChange={handleCheckboxChange}
                />
                <label
                    htmlFor="sportas"
                    className={`activityTextContainer ${checkedItems['Sportas'] ? 'checked' : ''}`}
                >
                    <img src={Basketball} alt="Basketball" className="activityIcon" />
                    <p className="activityText">Sportas</p>
                    <img src={Basketball} alt="Basketball" className="activityIcon" />
                </label>
            </form>
            <form className="activityForm">
                <input
                    type="checkbox"
                    name="Maistas"
                    className="activityCheckbox"
                    id="maistas"
                    checked={checkedItems['Maistas'] || false}
                    onChange={handleCheckboxChange}
                />
                <label
                    htmlFor="maistas"
                    className={`activityTextContainer ${checkedItems['Maistas'] ? 'checked' : ''}`}
                >
                    <img src={KawaiNoodle} alt="Kawai Noodle" className="activityIcon" />
                    <p className="activityText">Maistas</p>
                    <img src={KawaiNoodle} alt="Kawai Noodle" className="activityIcon" />
                </label>
            </form>
            <form className="activityForm">
                <input
                    type="checkbox"
                    name="Žmonės"
                    className="activityCheckbox"
                    id="zmones"
                    checked={checkedItems['Žmonės'] || false}
                    onChange={handleCheckboxChange}
                />
                <label
                    htmlFor="zmones"
                    className={`activityTextContainer ${checkedItems['Žmonės'] ? 'checked' : ''}`}
                >
                    <img src={People} alt="People" className="activityIcon" />
                    <p className="activityText">Žmonės</p>
                    <img src={People} alt="People" className="activityIcon" />
                </label>
            </form>
            <form className="activityForm">
                <input
                    type="checkbox"
                    name="Gamta"
                    className="activityCheckbox"
                    id="gamta"
                    checked={checkedItems['Gamta'] || false}
                    onChange={handleCheckboxChange}
                />
                <label
                    htmlFor="gamta"
                    className={`activityTextContainer ${checkedItems['Gamta'] ? 'checked' : ''}`}
                >
                    <img src={Nature} alt="Nature" className="activityIcon" />
                    <p className="activityText">Gamta</p>
                    <img src={Nature} alt="Nature" className="activityIcon" />
                </label>
            </form>
            <button onClick={toleu} className="toliau-button">toliau</button>
        </div>
    );
}

export default PridetiVeikla;