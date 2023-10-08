import { PersonOut, Person, ProfOutImg, ProfImgAvatar, CInfOut, NameInf,PersonInf } from './styles'
//import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import avatarPerson from '../../assets/avatar_person.svg'

export function PersonItem({ name, information }){
    return(
        <PersonOut>
            <Person>
                <ProfOutImg>
                    <ProfImgAvatar src= {avatarPerson}
                        alt= "Imagem padrão de um médico"
                    />
                </ProfOutImg>
                <CInfOut>
                    <NameInf>
                        <p> {name} </p>
                    </NameInf>
                    <PersonInf>
                        <p> {information} </p>
                    </PersonInf>
                </CInfOut>
            </Person>
        </PersonOut>
    )
}