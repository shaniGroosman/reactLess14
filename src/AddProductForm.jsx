import { useForm } from "react-hook-form";
import axios from "axios";

const AddProductForm = ({ add }) => {
    let { register, handleSubmit } = useForm()
    const save = (data) => {
        axios.post("https://nodeproject-i0da.onrender.com/api/product/", data)
            .then(result => {
                console.log(result);
                alert("add succssfulllll")
                add(result.data)
            }).catch(err => {
                alert("תקלה בהוספת הספר/n" + err.message)
            })
    }

    return (<form className="add=form" onSubmit={handleSubmit(save)}>
        <label >name</label>
        <input type="text" {...register("name")} />
        <label >description</label>
        <input type="text" {...register("description")} />
        <label >ingredient</label>
        <select multiple {...register("ingredient")}>
            <option >קמח</option>
            <option >מים</option>
            <option >שמן</option>
            <option >גזר</option>
            <option >שוקולד </option>
        </select>
        <label >price</label>
        <input type="number" {...register("price")} />
        <input type="submit" />
    </form>);
}
export default AddProductForm;
