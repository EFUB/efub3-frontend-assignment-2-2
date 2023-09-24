import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { listState } from "../store/atom";

import NavBar from "../components/NavBar";
import Upload from "../components/Upload";
import Item from "../components/Item";

const GalleryPage = () => {
	const [list, setList] = useRecoilState(listState);

	const inputRef = useRef(null);
	const [preview, setPreview] = useState(null);
	const onImage = (e) => {
		if (!inputRef.current) return;
		if (inputRef.current.files) {
			const reader = new FileReader();
			reader.readAsDataURL(inputRef.current.files[0]);
			reader.onloadend = () => {
				setPreview(reader.result);
			};
		}
	};
	const [text, setText] = useState("");
	const onText = (e) => setText(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		if (preview && text) {
			setList([
				...list,
				{
					id: list.length + 1,
					title: text,
					imageUrl: preview,
					bookmark: 0,
					author: "USER_ME",
				},
			]);
		} else alert("제목과 이미지를 입력해주세요.");
		setPreview(null);
		setText("");
	};

	return (
		<>
			<NavBar />
			<Upload
				onSubmit={onSubmit}
				text={text}
				onText={onText}
				onImage={onImage}
				inputRef={inputRef}
				preview={preview}
			/>
			<Wrapper>
				{list.map((item) => (
					<Item {...item} key={item.id} />
				))}
			</Wrapper>
		</>
	);
};

export default GalleryPage;

const Wrapper = styled.div`
	width: calc(100% - 60px);
	padding: 30px;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;
