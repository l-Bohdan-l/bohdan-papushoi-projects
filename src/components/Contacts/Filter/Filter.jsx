import { Input, Label, Wrapper } from "./Filter.styled";

export function Filter ({value, onChange}) {
    return (
        <Wrapper>
        <Label>
            Find contacts by name
            <Input type="text" value={value} onChange={onChange}/>
        </Label>
        </Wrapper>
    )
}