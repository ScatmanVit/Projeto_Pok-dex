import './style.css'
import logo from '../../assets/logo.png'


const Card = ({ image, name, id}) => {
   return (
      <div className='color_back'>
         <div className='container'>
            <div className='card'>
                  <p className='id_pokemon'><span>#{id}</span></p>
                  <img className='image_pokemon' src={image} alt={name} />
                  <h1 className='name_pokemon'>{name}</h1>
            </div>
         </div>
      </div>
   )  
}

export default Card