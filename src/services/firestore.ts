import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  type DocumentData,
  onSnapshot
} from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { OperationType, type FirestoreErrorInfo } from '../types';

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// ---------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------

const PROJECTS_COL = 'projects';

export async function getProjects() {
  try {
    const q = query(collection(db, PROJECTS_COL), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, PROJECTS_COL);
  }
}

export async function addProject(project: any) {
  try {
    return await addDoc(collection(db, PROJECTS_COL), {
      ...project,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, PROJECTS_COL);
  }
}

export async function updateProject(id: string, updates: any) {
  try {
    const docRef = doc(db, PROJECTS_COL, id);
    await updateDoc(docRef, updates);
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `${PROJECTS_COL}/${id}`);
  }
}

export async function deleteProject(id: string) {
  try {
    const docRef = doc(db, PROJECTS_COL, id);
    await deleteDoc(docRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, `${PROJECTS_COL}/${id}`);
  }
}

// ---------------------------------------------------------
// PRICING
// ---------------------------------------------------------

const PRICING_COL = 'pricing';

export async function getPricingTiers() {
  try {
    const q = query(collection(db, PRICING_COL), orderBy('order', 'asc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, PRICING_COL);
  }
}

export async function addPricingTier(tier: any) {
  try {
    return await addDoc(collection(db, PRICING_COL), tier);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, PRICING_COL);
  }
}

// ---------------------------------------------------------
// CONTACTS
// ---------------------------------------------------------

const CONTACTS_COL = 'contacts';

export async function submitContactForm(data: any) {
  try {
    return await addDoc(collection(db, CONTACTS_COL), {
      ...data,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, CONTACTS_COL);
  }
}

export async function getContacts() {
  try {
    const q = query(collection(db, CONTACTS_COL), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, CONTACTS_COL);
  }
}

// ---------------------------------------------------------
// PROFILE
// ---------------------------------------------------------

const PROFILES_COL = 'profiles';

export async function getProfile(userId: string) {
  try {
    const docRef = doc(db, PROFILES_COL, userId);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return snapshot.data();
    }
    return null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, `${PROFILES_COL}/${userId}`);
  }
}

export async function updateProfile(userId: string, data: any) {
  try {
    const docRef = doc(db, PROFILES_COL, userId);
    await updateDoc(docRef, data);
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `${PROFILES_COL}/${userId}`);
  }
}
