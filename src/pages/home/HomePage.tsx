import { LayoutContainer } from "../../layouts/LayoutContainer";
import { Background } from "../../layouts/Background";
import { Navbar } from "../../components/Navbar";
import { TextTitle } from "../../components/TextTitle";
import { InputSearch } from "../../components/InputSearch";

export const HomePage = () => {
    return (
        <Background>
            <LayoutContainer>
                <Navbar />
                <TextTitle text="What would you like to read tonight" fontSize="text-3xl md:text-4xl" width="md:w-4/12 md:mx-auto" fontWeight="font-bold"/>
                <InputSearch/>
            </LayoutContainer>
        </Background>
    )
}
