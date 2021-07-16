// click on checkbox >>> archive that task
// import { firebase } from '../../firebase'

const Checkbox = ({ id }) => {
     
    const archiveTask = () => {
        firebase
        .fireStore()
        .collection('tasks')
        .doc(id)
        .update({
            archived:true
        })
    };

        return (
             <div className='checkbox-holder' onClick={ archiveTask} >
                <span className='checkbox'/>
            </div>
        );
};  

export default Checkbox;