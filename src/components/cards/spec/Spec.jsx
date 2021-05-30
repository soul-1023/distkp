import './spec-card.css'
import user_img from './user.svg'

function Spec({id, imgPath, title, description, amount, handleClick}) {
    const responseForUpdate = async (addr) => {
        let response = await fetch(addr, {
            method: 'POST'
        })

        if(response.ok) {
            console.log('Successful');
        } else {
            console.log('Error: field `interested_num` don\'t increment');
        }
    }

    return (
        <div className="col-2">
            <div 
            className="block"
            onClick={() => {
                responseForUpdate(`http://back-distkp/api/specs/${id}`)
                handleClick(`/spec/${id}`)
            }}
            >
                <div className="filling">
                    <img src={imgPath} alt={title} />

                    <div className="text">
                        <h2 className="title">{title}</h2>

                        <p>{description}</p>
                        
                        <div className="amount">
                            <img src={user_img} alt="user" />
                            <p>{amount} заинтересовано</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spec;

