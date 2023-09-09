export default function Friend({friend}){
    const {name, username, phone, email, website} = friend;
    return(
        <div className="box">
            <h4>Name : {name}</h4>
            <h5>User Name: {username}</h5>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
            
        </div>
    )
}