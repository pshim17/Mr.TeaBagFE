import './TeaSubscriptionsContainer.css';
import TeaSubscriptionCards from '../TeaSubscriptionCards/TeaSubscriptionCards.jsx'
import teaIcon from '../../assets/icons/tea-icon.jpg';

function TeaSubscriptions( {teaSubscriptions} ) {

  const teaSubscriptionsCards = teaSubscriptions.map(teaSubscription => {
    return (
      < TeaSubscriptionCards
          icon = { teaIcon } 
          title = { teaSubscription.attributes.title }
          id={ teaSubscription.id } 
          key={ teaSubscription.id }
      />
    )
  })

  return (
      <section className='TeaSubscriptionsContainer'>
        { teaSubscriptionsCards }
      </section>
  );
}

export default TeaSubscriptions;
