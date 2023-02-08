import { Container } from './styles';
import { currencyFormatter } from '../../utils/currencyFormatter';

export function DashboardTable({ products, isChangeLogTable }) {
	return(
		<Container>
			<thead>
				<tr>
					<th>ID</th>
					<th>Produto</th>
					<th>Estoque</th>
					<th>Preço</th>
					<th>Categoria</th>
				</tr>
			</thead>

			<tbody>
				{products && products.map((product) => (
					<tr onClick={(event) => handleSelectProduct(event)} key={product.id} id={product.id}>
						<td>{product.id}</td>
						<td>{product.name}</td>
						<td>{product.amount}</td>
						<td>{currencyFormatter(product.price)}</td>
						<td>{product.category}</td>
					</tr>
				))}
			</tbody>
		</Container>
	)
}