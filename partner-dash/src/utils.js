import { supabase } from './supabase';

async function getPartners(setPartners) {
    try {
      const { data, error } = await supabase
        .from('partners')
        .select('*');
      if (error) throw error;
      const numItemsEvent = new CustomEvent('numItems', 
      { detail: { numItems: data.length } });
      console.log(numItemsEvent);
      window.dispatchEvent(numItemsEvent);
      setPartners(data);
    } catch (error) {
      alert(error);
    }
  };

  async function handleAddCard(partner, setPartners) {   
    try {
      const { error } = await supabase
        .from('partners')
        .insert([partner]);
  
      if (error) {
        throw error;
      }
      getPartners(setPartners);
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  export { getPartners, handleAddCard };