import React from "react";
import {
	LiaEdit,
	LiaFolder,
	LiaFolderOpen,
	LiaTrashAltSolid,
} from "react-icons/lia";
import { FaPerson } from "react-icons/fa6";
import {
	setIsAdd,
	setIsId,
	setIsLoading,
	setIsViewId,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import TableLoader from "../../modals/TableLoader";
import Toast from "../../modals/Toast";
import UserInfo from "./UserInfo";

const UserList = ({
	users,
	handleDelete,
	handleEdit,
	isLoading,
	handleDeleteModal,
	handleStatusEdit,
	handleStatusModal,
}) => {
	const counter = [1, 2, 3, 4, 5, 6];
	const { store, dispatch } = React.useContext(StoreContext);
	console.log(counter);
	const isLoaded = () => {
		setTimeout(() => {
			dispatch(setIsLoading(false));
		}, 1000);
	};
	const showInfo = (id) => {
		dispatch(setIsViewId(true));
		dispatch(setIsId(id));
		// works
		console.log(store.isId);
	};
	return (
		<>
			<div className='table-wrapper relative'>
				<main className='w-full py-'>
					<table className='table-users w-full'>
						<thead className='border-b border-content'>
							<tr className=' bg-content/10 text-content'>
								<th className='w-[50px]'>Id</th>
								<th className='w-[175px]'>Name</th>
								<th className='w-[175px]'>Contact No</th>
								<th className='w-[175px]'>Email</th>
								<th className='w-[125px]'>Is Archived?</th>
								<th className='w-[100px]'>Actions</th>
							</tr>
						</thead>
						<tbody>
							{users.length === 0 && (
								<>
									<tr>
										{counter.map((index) => (
											<>
												<td
													className='text-content'
													key={index}>
													null
												</td>
											</>
										))}
									</tr>
								</>
							)}
							{isLoading && (
								<tr>
									<td colSpan={6}>
										{isLoading && (
											<TableLoader
												onLoad={isLoaded()}
												count='30'
												cols='6'
											/>
										)}
									</td>
								</tr>
							)}
							{store.isLoading === false && (
								<>
									{users.map((user, index) => (
										<>
											<tr key={index}>
												{/* id */}
												<td>{user[0]}</td>
												{/* name */}
												<td>{user[1]}</td>
												{/* contact */}
												<td>{user[6]}</td>
												{/* email */}
												<td>{user[7]}</td>

												<td>
													<p
														className={` mx-auto ${
															user[9] === 1
																? `bg-green-300 rounded-full px-3 w-fit mt-2 text-green-950`
																: `bg-red-300 rounded-full px-3 w-fit mt-2 text-red-950 `
														}`}>
														{user[9] ? "Active" : "Inactive"}
													</p>
												</td>

												<td className='table-action'>
													<ul>
														{/* info */}
														<li>
															<button
																className='tooltip tools hover:bg-accent hover:text-primary transition-all duration-500'
																data-tooltip={`Info`}
																onClick={() => showInfo(user[0])}>
																<FaPerson />
															</button>
														</li>
														<li>
															<button
																className='tooltip tools hover:bg-accent hover:text-primary transition-all duration-500'
																data-tooltip={`${
																	user[9] === 0 ? "Unarchive" : "Archive"
																}`}
																onClick={() => handleStatusModal(user[0])}>
																{user[9] === 0 ? (
																	<LiaFolderOpen />
																) : (
																	<LiaFolder />
																)}
															</button>
														</li>
														{user[9] === 0 ? (
															<>
																<li>
																	<button
																		className='tooltip tools hover:bg-accent hover:text-primary transition-all duration-500'
																		data-tooltip='Delete'
																		onClick={() => handleDeleteModal(user[0])}>
																		<LiaTrashAltSolid />
																	</button>
																</li>
															</>
														) : (
															<>
																<li>
																	<button
																		className='tooltip tools hover:bg-accent hover:text-primary transition-all duration-500'
																		onClick={() => handleEdit(user[0])}
																		data-tooltip='Edit'>
																		<LiaEdit />
																	</button>
																</li>
															</>
														)}
													</ul>
												</td>
											</tr>
										</>
									))}
								</>
							)}
						</tbody>
					</table>
				</main>
			</div>
			{store.isViewId && (
				<UserInfo
					users={users}
					isId={store.isId}
					setIsId={store.setIsId}
				/>
			)}
		</>
	);
};

export default UserList;
