import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './TeaSubscriptionCardDetails.css';
import teaIcon from '../../assets/icons/tea-icon.jpg';

function TeaSubscriptionCardDetails() {
  const clickedTeaSubscriptionId = useParams().teaSubscriptionId;
  const [clickedTeaSubscription, setclickedTeaSubscription] = useState(null);

  function getTeaSubscriptionDetails() {
    fetch(`http://localhost:3000/api/v1/subscriptions/${clickedTeaSubscriptionId}`)
    .then(response => response.json())
    .then(data => {
      setclickedTeaSubscription(data)
    })
    .catch(error => console.log('error message: ', error.message))
  }

  function cancelTeaSubscriptionStatus() {
    fetch(`http://localhost:3000/api/v1/subscriptions/${clickedTeaSubscriptionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isActive: false,
      }),
    })
      .then((response) => {
        if (response.ok) {
          getTeaSubscriptionDetails();
        } else {
          console.log('Failed to cancel subscription');
        }
      })
      .catch((error) => console.log('Error message:', error.message));
  }
  
  useEffect(() => {
    getTeaSubscriptionDetails();
  }, [])

  if(clickedTeaSubscription) {
    return (
      <section className='TeaSubscriptionCardDetails'>
        <img src= {teaIcon } alt="tea icon" />
        
        <h1>{ clickedTeaSubscription.data.attributes.title }</h1>

        <h2>
          Status: <span className={clickedTeaSubscription.data.attributes.isActive ? 'status-active' : 'status-inactive'}>
            {clickedTeaSubscription.data.attributes.isActive ? 'Active' : 'Inactive'}
          </span> 
        </h2>

        <h2>Price: ${ clickedTeaSubscription.data.attributes.price }</h2>

        <div className="teas">
          <h2>Tea(s) Included:</h2>
            {  clickedTeaSubscription.data.attributes.teas.length > 0 && ( clickedTeaSubscription.data.attributes.teas.map((tea, index) => (
              <p key={index}> <strong>{tea.title}</strong>: {tea.description} </p> )))
            }

            { clickedTeaSubscription.data.attributes.teas.length === 0 && <p>No teas available</p>}
        </div>

        <div className="customers"> 
          <h2>Customers:</h2>
            { clickedTeaSubscription.data.attributes.customers.length > 0 && ( clickedTeaSubscription.data.attributes.customers.map((customer, index) => (
              <p key={index}> {customer.first_name} {customer.last_name} </p> )))
            }
            
            { clickedTeaSubscription.data.attributes.customers.length === 0 && <p>No customers available</p>}
        </div>

        <div className="cancelButton">
          <button onClick={cancelTeaSubscriptionStatus}>
            <span className="cancel-btn-color">Cancel Subscription</span>
          </button>
        </div>
      </section>
    );
  }
}

export default TeaSubscriptionCardDetails;
