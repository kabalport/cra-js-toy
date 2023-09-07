import Button from "../atoms/Buttons";
import useStore from "../store";

function MemoItem({ memo }) {
    const updateMemo = useStore((state) => state.updateMemo);
    const deleteMemo = useStore((state) => state.deleteMemo);

    return (
        <div>
            <p>{memo.title}</p>
            <Button
                onClick={() => updateMemo(memo.id, { title: "Updated Title" })}
                label="Update"
            />
            <Button onClick={() => deleteMemo(memo.id)} label="Delete" />
        </div>
    );
}

export default MemoItem;
