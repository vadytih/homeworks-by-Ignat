import {DateTypeObj} from "./AlternativeAffairs";
import {ChangeEvent, useState} from "react";
import {v1} from "uuid";


type listManType = {
    dateS: Array<DateTypeObj>
    removeMan: (id: string) => void
    addMan: (inputValue: DateTypeObj) => void
}

export const ListMan = (props: listManType) => {
//delleter
    const onClickButtonDelHeandler = (id: string) => {
        console.log(id)
        props.removeMan(id)
    }

//input
    let [inputsVal, setinputVal] = useState({
        id: '',
        name: '',
        old: 0,
        sex: '',
        driverCar: false,
        children: false,
    })

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {

        if (event.currentTarget.name === 'name') {
            let obj = {...inputsVal}
            obj.name = event.currentTarget.value
            setinputVal(obj)
            // console.log(inputsVal.name)
        }
        if (event.currentTarget.name === 'old') {
            let obj = {...inputsVal}
            obj.old = Number(event.currentTarget.value)
            setinputVal(obj)
            console.log(inputsVal.old)
            console.log(Number(event.currentTarget.value))
        }
        if (event.currentTarget.name === 'sex') {
            let obj = {...inputsVal}
            obj.sex = event.currentTarget.value
            setinputVal(obj)
            // console.log(inputsVal.sex)
        }

    }
    const onChangeInputCheckBoxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.name === "children") {
            let obj = {...inputsVal}
            obj.children = event.currentTarget.checked
            setinputVal(obj)
            // console.log(inputsVal.children)
        }
        if (event.currentTarget.name === "driverCar") {
            let obj = {...inputsVal}
            obj.driverCar = event.currentTarget.checked
            setinputVal(obj)
            // console.log(inputsVal.driverCar)
        }
    }

    const onChangeInputRadioHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.value === "М") {
            let obj = {...inputsVal}
            obj.sex = "М"
            setinputVal(obj)
            // console.log(inputsVal.sex)
        }
        if (event.currentTarget.value === "Ж") {
            let obj = {...inputsVal}
            obj.sex = "Ж"
            setinputVal(obj)
            // console.log(inputsVal.sex)
        }
    }

    //button clean
    const onClickButtonInputClean = (e: string) => {
        if (e === "clrName") {
            let obj = {...inputsVal}
            obj.name = ""
            setinputVal(obj)
        }
        if (e === "clrOld") {
            let obj = {...inputsVal}
            obj.old = 0
            setinputVal(obj)
        }

    }

    //button add
    const onClickButtonAddHandler = () => {
        let obj = {...inputsVal}
        obj.id = v1()
        setinputVal(obj)

        if (isNaN(obj.old)) {
            // console.log(666)
            alert("Поле возраст можно вводить только числа")
        } else if (obj.name === "") {
            alert("Имя не может быть пустым")
        } else if (obj.sex === "") {
            alert("Укажите пол")
        } else {
            props.addMan(inputsVal)
        }
    }

    //button filter
    let [filer, setFilter] = useState("all")

    const onClickFilerButtonHandler = (btn: string) => {
        setFilter(btn)
    }

    let filteredDataS = [...props.dateS]

    if (filer === "man") {
        filteredDataS = [...props.dateS].filter(f => (f.sex === "М"))
    }
    if (filer === "woman") {
        filteredDataS = [...props.dateS].filter(f => (f.sex === "Ж"))
    }
    if (filer === "children") {
        filteredDataS = [...props.dateS].filter(f => (f.children))
    }
    if (filer === "drive") {
        filteredDataS = [...props.dateS].filter(f => (f.driverCar))
    }

    return (
        <div>
            <div className="hw2-alt">
                <div>
                    <button onClick={() => onClickButtonInputClean('clrName')}>очист.</button>
                    <input value={inputsVal.name} name={"name"} placeholder="имя:" onChange={onChangeInputHandler}/>
                </div>
                <div>
                    <button onClick={() => onClickButtonInputClean('clrOld')}>очист.</button>
                    <input type={"number"} value={inputsVal.old} name={"old"} placeholder="возраст:"
                           onChange={onChangeInputHandler}/>
                </div>

                <div>
                    <span>Пол: </span>
                    <label><span>М</span><input className="input-cb" value={'М'} name={"sex"} type={"radio"}
                                                onChange={onChangeInputRadioHandler}/></label>
                    <label><span>Ж</span><input className="input-cb" value={'Ж'} name={"sex"} type={"radio"}
                                                onChange={onChangeInputRadioHandler}/></label>
                </div>
                <div>
                    <label><span>наличие детей: </span><input className="input-cb"
                                                              type={"checkbox"}
                                                              name={"children"}
                                                              onChange={onChangeInputCheckBoxHandler}/>
                    </label>
                    <br/>
                    <label><span>наличие в/у: </span><input className="input-cb"
                                                            type={"checkbox"}
                                                            name={"driverCar"}
                                                            onChange={onChangeInputCheckBoxHandler}/>
                    </label>
                </div>
                <div>
                    <button onClick={onClickButtonAddHandler}>Добавить</button>
                </div>
            </div>



            <br/>
            <hr/>
            <div>
                {filteredDataS.map(t => {
                    return (
                        <div key={t.id} className="hw2__result">
                            <button className="hw2__del-button" onClick={() => onClickButtonDelHeandler(t.id)}>x</button>
                            <span className="hw2__span">{t.name} {t.old} {t.sex}</span>
                        </div>
                    )
                })}
            </div>
            <br/>
            <div>
                <button onClick={() => onClickFilerButtonHandler('all')}>Все</button>
                <button onClick={() => onClickFilerButtonHandler('man')}>Мужчины</button>
                <button onClick={() => onClickFilerButtonHandler('woman')}>Женщины</button>
                <button onClick={() => onClickFilerButtonHandler('children')}>с детьми</button>
                <button onClick={() => onClickFilerButtonHandler('drive')}>могут водить авто</button>
            </div>
        </div>
    )
}