import { collection, query, where, documentId } from 'firebase/firestore'
import { db } from './firebase'

export const userCollectionRef = query(collection(db, 'users'), where(documentId(), "!=", "default"))