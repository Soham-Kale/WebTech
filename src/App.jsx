import React from 'react'
import "./App.css";
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpg"
import img6 from "./assets/img6.jpg"
import img7 from "./assets/img7.jpg"

const cardsData = [
  {id: 1, sunTitle: "SubTitle1",  title: "Title1", discription: "Discriptioin1", img: img1},
  {id: 2, sunTitle: "SubTitle2", title: "Title2", discription: "Discriptioin2", img: img2},
  {id: 3, sunTitle: "SubTitle3", title: "Title3", discription: "Discriptioin3", img: img3},
  {id: 4, sunTitle: "SubTitle4", title: "Title4", discription: "Discriptioin4", img: img4},
  {id: 5, sunTitle: "SubTitle5", title: "Title5", discription: "Discriptioin5", img: img5},
  {id: 6, sunTitle: "SubTitle6", title: "Title6", discription: "Discriptioin6", img: img6},
  {id: 7, sunTitle: "SubTitle7", title: "Title7", discription: "Discriptioin7", img: img7},
]

const App = () => {
  return (
    <div className='outer-container'>
      <div className="main-container">

        <div className="row">
          {cardsData.slice(0,2).map((card) => (
              <div key={card.id} className='card'>
                <h1>{card.title}</h1>
                <p>{card.discription}</p>
                <img src={card.img} className='imgStyle' />
                <div className="button">
                  <button className='btn1'>Btn1</button>
                  <button className='btn2'>Download</button>
                </div>
            </div>
          ))}
        </div>

        <div className="row">
          {cardsData.slice(2,5).map((card) => (
            <div key={card.id} className='card'>
                <h1>{card.title}</h1>
                <p>{card.discription}</p>
                <img src={card.img} className='imgStyle' />
                <div className="button">
                  <button className='btn1'>Btn1</button>
                  <button className='btn2'>Download</button>
                </div>
            </div>
          ))}
        </div>

        <div className="row">
          {cardsData.slice(5,7).map((card) => (
            <div key={card.id} className='card'>
                <h1>{card.title}</h1>
                <p>{card.discription}</p>
                <img src={card.img} className='imgStyle' />
                <div className="button">
                  <button className='btn1'>Btn1</button>
                  <button className='btn2'>Download</button>
                </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App