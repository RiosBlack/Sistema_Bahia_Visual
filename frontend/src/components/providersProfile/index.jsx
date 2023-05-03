import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import Image from 'next/image';
import perfil from '../../assets/perfil.jpg';
import { FaUser } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import Link from 'next/link';

export default function ProvidersProfile() {
    return (
        <div className="w-full p-5">
            <Stack className="mb-4 flex">
                <InputGroup>
                    <InputLeftElement children={<GoSearch />} />
                    <Input
                        placeholder="Digite o nome do prestador"
                        focusBorderColor="#17112A"
                        size="md"
                        inputMode="search"
                    />
                </InputGroup>
            </Stack>
            <div className="drop-shadow-lg border-2 border-[#17112A] rounded-xl p-2 font-sans font-medium text-lg">
                <TableContainer
                    overflowY={'auto'}
                    className="font-sans h-[470px]"
                >
                    <Table variant="striped" colorScheme="orange">
                        <TableCaption>
                            Imperial to metric conversion factors
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Foto</Th>
                                <Th>Nome</Th>
                                <Th>Sobrenome</Th>
                                <Th>Nome da mãe</Th>
                                <Th>Ano de nacimento</Th>
                                <Th>Cpf</Th>
                                <Th>Detalhes</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Image
                                        src={perfil}
                                        alt="Picture of the author"
                                        priority
                                        className="w-10 h-10 rounded-full"
                                    />
                                </Td>
                                <Td>Teste</Td>
                                <Td>Teste do sobrenome</Td>
                                <Td>Mãe do teste</Td>
                                <Td>25/10/1993</Td>
                                <Td>025.664.545-45</Td>
                                <Td>
                                    <Link href={`/prestadores/${1}`}>
                                        <FaUser />
                                    </Link>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td>
                                    <Image
                                        src={perfil}
                                        alt="Picture of the author"
                                        priority
                                        className="w-10 h-10 rounded-full"
                                    />
                                </Td>
                                <Td>Teste</Td>
                                <Td>Teste do sobrenome</Td>
                                <Td>Mãe do teste</Td>
                                <Td>25/10/1993</Td>
                                <Td>025.664.545-45</Td>
                                <Td>
                                    <Link href={`/prestadores/${1}`}>
                                        <FaUser />
                                    </Link>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td>
                                    <Image
                                        src={perfil}
                                        alt="Picture of the author"
                                        priority
                                        className="w-10 h-10 rounded-full"
                                    />
                                </Td>
                                <Td>Teste</Td>
                                <Td>Teste do sobrenome</Td>
                                <Td>Mãe do teste</Td>
                                <Td>25/10/1993</Td>
                                <Td>025.664.545-45</Td>
                                <Td>
                                    <Link href={`/prestadores/${1}`}>
                                        <FaUser />
                                    </Link>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td>
                                    <Image
                                        src={perfil}
                                        alt="Picture of the author"
                                        priority
                                        className="w-10 h-10 rounded-full"
                                    />
                                </Td>
                                <Td>Teste</Td>
                                <Td>Teste do sobrenome</Td>
                                <Td>Mãe do teste</Td>
                                <Td>25/10/1993</Td>
                                <Td>025.664.545-45</Td>
                                <Td>
                                    <Link href={`/prestadores/${1}`}>
                                        <FaUser />
                                    </Link>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td>
                                    <Image
                                        src={perfil}
                                        alt="Picture of the author"
                                        priority
                                        className="w-10 h-10 rounded-full"
                                    />
                                </Td>
                                <Td>Teste</Td>
                                <Td>Teste do sobrenome</Td>
                                <Td>Mãe do teste</Td>
                                <Td>25/10/1993</Td>
                                <Td>025.664.545-45</Td>
                                <Td>
                                    <Link href={`/prestadores/${1}`}>
                                        <FaUser />
                                    </Link>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td>
                                    <Image
                                        src={perfil}
                                        alt="Picture of the author"
                                        priority
                                        className="w-10 h-10 rounded-full"
                                    />
                                </Td>
                                <Td>Teste</Td>
                                <Td>Teste do sobrenome</Td>
                                <Td>Mãe do teste</Td>
                                <Td>25/10/1993</Td>
                                <Td>025.664.545-45</Td>
                                <Td>
                                    <Link href={`/prestadores/${1}`}>
                                        <FaUser />
                                    </Link>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td>
                                    <Image
                                        src={perfil}
                                        alt="Picture of the author"
                                        priority
                                        className="w-10 h-10 rounded-full"
                                    />
                                </Td>
                                <Td>Ultimo</Td>
                                <Td>Teste do sobrenome</Td>
                                <Td>Mãe do teste</Td>
                                <Td>25/10/1993</Td>
                                <Td>025.664.545-45</Td>
                                <Td>
                                    <Link href={`/prestadores/${1}`}>
                                        <FaUser />
                                    </Link>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
