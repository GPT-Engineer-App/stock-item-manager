import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Select, Table, Thead, Tbody, Tr, Th, Td, Text, IconButton } from "@chakra-ui/react";
import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

const initialArticles = [
  // Dummy data for the initial state
  { id: 1, name: "Articolo 1", code: "001", supplier: "Fornitore A", category: "Categoria X", quantity: 100, price: "10.00" },
  // Add more articles as needed for testing
];

const Index = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [filter, setFilter] = useState("");

  // Handlers for article management
  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleCreateArticle = () => {
    // TODO: Implement logic to create a new article
  };
  const handleEditArticle = (id) => {
    // TODO: Implement logic to edit an article
  };
  const handleDeleteArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  // Filtered articles based on the search input
  const filteredArticles = articles.filter((article) => article.name.toLowerCase().includes(filter.toLowerCase()) || article.code.toLowerCase().includes(filter.toLowerCase()) || article.supplier.toLowerCase().includes(filter.toLowerCase()) || article.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Container maxW="container.xl">
      <Box as="header" p={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Gestione Articoli
        </Text>
      </Box>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Ricerca articoli</FormLabel>
          <Input placeholder="Filtra per nome, codice articolo, fornitore, categoria..." value={filter} onChange={handleFilterChange} />
        </FormControl>
        <Button leftIcon={<FaPlus />} colorScheme="teal">
          Aggiungi Articolo
        </Button>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Codice Articolo</Th>
              <Th>Fornitore</Th>
              <Th>Categoria</Th>
              <Th>Quantità</Th>
              <Th>Prezzo</Th>
              <Th>Azioni</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredArticles.map((article) => (
              <Tr key={article.id}>
                <Td>{article.name}</Td>
                <Td>{article.code}</Td>
                <Td>{article.supplier}</Td>
                <Td>{article.category}</Td>
                <Td>{article.quantity}</Td>
                <Td>{article.price}</Td>
                <Td>
                  <IconButton aria-label="Edit" icon={<FaEdit />} onClick={() => handleEditArticle(article.id)} mr={2} />
                  <IconButton aria-label="Delete" icon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteArticle(article.id)} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Stack>
    </Container>
  );
};

export default Index;
