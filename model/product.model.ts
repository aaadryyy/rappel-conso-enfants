export type Product = {
  gtin: number;
  numero_fiche: string;
  numero_version: number;
  nature_juridique_rappel: string;
  categorie_produit: string;
  sous_categorie_produit: string;
  marque_produit: string;
  modeles_ou_references: string;
  identification_produits: string;
  conditionnements: string | null;
  date_debut_commercialisation: string;
  date_date_fin_commercialisation: string;
  temperature_conservation: string | null;
  marque_salubrite: string | null;
  informations_complementaires: string;
  zone_geographique_de_vente: string;
  distributeurs: string;
  motif_rappel: string;
  risques_encourus: string;
  preconisations_sanitaires: string | null;
  description_complementaire_risque: string | null;
  conduites_a_tenir_par_le_consommateur: string;
  numero_contact: string;
  modalites_de_compensation: string;
  date_de_fin_de_la_procedure_de_rappel: string;
  informations_complementaires_publiques: string | null;
  liens_vers_les_images: string;
  lien_vers_la_liste_des_produits: string | null;
  lien_vers_la_liste_des_distributeurs: string;
  lien_vers_affichette_pdf: string;
  lien_vers_la_fiche_rappel: string;
  rappel_guid: string;
  date_publication: string;
  libelle: string;
  id: number;
  images: Array<string>;
};