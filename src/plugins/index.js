import { Swipe, SwipeItem,Button,Icon,Popup} from 'vant';
let plugins=[
    Swipe, SwipeItem,Button,Icon,Popup
]
export default function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}