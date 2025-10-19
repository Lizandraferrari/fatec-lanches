import BasePage from "./BasePage";
import Seletor from "./Seletor";

export default function CategoriesBase({title , subtitle , children}: {title: string , subtitle?: string , children?: React.ReactNode}) {
    return (
        <BasePage title={title} subtitle={subtitle}>
            <Seletor label = {'Ordenar por: '} options={['Preço Menor' , 'Preço Maior']} defaultValue="Preço Menor"/>
            {children}
        </BasePage>
    )
}
