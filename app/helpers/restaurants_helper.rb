module RestaurantsHelper
  require 'rexml/document'

  def format_xml(shop)
    if shop.name == "shop"
      shop.elements['name'].text
    end
  end
end
