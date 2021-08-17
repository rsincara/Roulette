import './App.css';
import React from 'react';
import Roulette from "./Roulette";

let chars = ['https://pbs.twimg.com/media/E7kUe3gWUAcefrE.jpg',
'https://i.pinimg.com/originals/57/40/0c/57400c4761ae8ae16780773ea72491ce.png',
'https://pbs.twimg.com/profile_images/801087906/Asuka_Twitterpic.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrN1P62LcyPdTfILE1opfiTN0NLAT-zIbK4A&usqp=CAU',
    'https://pbs.twimg.com/profile_images/728782376/Mari_Illustrious_Makinami_by_yo4tojp_-_Copy.jpg'
]

let tataps = [
    'https://sun1-96.userapi.com/s/v1/ig2/AlmqSUSiRoX9EiNcxb9EGp8YByVZfv2hMsusSsx73gqdUYo8Ti9lR8thvlvuPZi-SCXG7yZxGYrQqEL8s5fx0ezM.jpg?size=50x50&quality=95&crop=9,5,1063,1063&ava=1',
    'https://sun1-94.userapi.com/s/v1/if1/tdT8v_k9DvcThQsDmLZBxtNXqMx_Mn50lGVGbsmx-0hnSmeOorE36iTVtmT2IEopya2ClruU.jpg?size=50x50&quality=96&crop=38,70,506,506&ava=1',
    'https://sun1-30.userapi.com/s/v1/ig2/PWX9oW5-4kbmFRg1gLuKF0dwSX_HZVlngxvQKkR5ZaYt1HiDkwue7MfO3FF-M3m7L4btxhbfTfm0lV6ytZML-zXV.jpg?size=50x50&quality=96&crop=13,24,201,201&ava=1',
    'https://sun1-90.userapi.com/s/v1/if2/IUAqjsuI3RAhvpKXILgHckwkKkjvbUclWfNaTryHGL7awnkp1aQS9DK5p6cKVyhRr6ulVZ_Rv1a547XTmlGWHi6L.jpg?size=50x50&quality=96&crop=724,313,451,451&ava=1',
    'https://sun1-84.userapi.com/s/v1/ig2/007ShfNLQEdi958qfeX3tGfk95WWZAzuoIMVCEDjFRQgx7EdsRLi-DjRb60UQGf1WmXCW2OW4jXW-b7LLy-7AGc7.jpg?size=50x50&quality=96&crop=0,174,661,661&ava=1',
    'https://sun1-14.userapi.com/s/v1/ig2/ifPRK8LbqUow85k-ouYFhRm1LU1cPg9lfE8LFxfcgeKkOiyMGDJAhR4pQIwsBWpplDIQX2mIcjdep4btjnXXsx5t.jpg?size=50x50&quality=96&crop=211,100,361,361&ava=1'

]

function App() {
    return (
        <div>
            <Roulette values={chars}/>
        </div>
    )
}

export default App;
