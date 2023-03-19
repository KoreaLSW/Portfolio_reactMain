import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    deleteComment,
    insertComment,
    selectComment,
    updateComment,
} from '../firebase/firebaseAPI';

export default function useComment() {
    const queryClient = useQueryClient();

    const commentList = useQuery(['comment'], selectComment, {
        staleTime: 1000 * 60,
    });

    const addComment = useMutation(
        ({ id, password, contents }) => insertComment(id, password, contents), //
        {
            onSuccess: () => queryClient.invalidateQueries(['comment']),
        }
    );

    const updateCommentHook = useMutation(
        ({ key, id, password, contents }) =>
            updateComment(key, id, password, contents), //
        {
            onSuccess: () => queryClient.invalidateQueries(['comment']),
        }
    );

    const deleteCommentHook = useMutation(
        ({ key }) => deleteComment(key), //
        {
            onSuccess: () => queryClient.invalidateQueries(['comment']),
        }
    );

    return { commentList, addComment, updateCommentHook, deleteCommentHook };
}
