import './TeaSubscriptionCards.css';
import { Link } from 'react-router-dom';

function TeaSubscriptionCards({icon, title, id}) {
  return (
    <section className='TeaSubscriptions'>
      <Link to={`/${id}`}>
        <img src= { icon } alt= "Tea subscription" />
        <div className="title-container">
          <p>{title}</p>
        </div>
      </Link>
    </section>
  );
}

export default TeaSubscriptionCards;
