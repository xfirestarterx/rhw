import './CardsContainer.css';
import Card from "../Card/Card";

const CardsContainer = ({ usersList, deleteUserHandler, addUserHandler }) => {
    return <div className="CardsContainer">
        {usersList.map(user =>
            <Card key={user.id} user={user} deleteHandler={deleteUserHandler} />
        )}
    </div>
};

export default CardsContainer;