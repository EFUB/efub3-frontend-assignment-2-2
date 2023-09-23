import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { defaultList } from "./_mock";

const { persistAtom } = recoilPersist();

export const listState = atom({
	key: "list",
	default: defaultList,
	effects_UNSTABLE: [persistAtom],
});

export const bookmarkState = atom({
	key: "bookmark",
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const bookmarkListSelector = selector({
	key: "bookmarkList",
	get: ({ get }) => {
		const list = get(listState);
		const bookmark = get(bookmarkState);
		return list.filter((item) => bookmark.includes(item.id));
	},
});

export const myListSelector = selector({
	key: "myList",
	get: ({ get }) => {
		const list = get(listState);
		return list.filter((item) => item.author === "USER_ME");
	},
});
